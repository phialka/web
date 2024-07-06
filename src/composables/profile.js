

export function useSignIn(requestBody, profileValidator, storeAuth) {
  storeAuth.auth(requestBody).then(() => {
    if (storeAuth.authJWT) {
      storeAuth.getProfileByJWT({ auth_data: storeAuth.authJWT });
      document.getElementById("popover-sign-in").hidePopover();
      document.getElementById("popover-sign-up").hidePopover();
    } else {
      profileValidator.value.$reset();
      profileValidator.value.$touch();
      profileValidator.value.login.$errors.push({
        $message: "Incorrect login or password",
      });
      profileValidator.value.password.$errors.push({
        $message: "Please try again",
      });
    }
  });
}

export function useSignUp(requestBody, profileValidator, storeAuth) {
  storeAuth.createProfile(requestBody);
  useSignIn(
    { login: requestBody.login, password: requestBody.password },
    profileValidator,
    storeAuth
  );
}

export function useSignOut(storeAuth) {
  storeAuth.profile = undefined;
  storeAuth.authJWT = undefined;
}
