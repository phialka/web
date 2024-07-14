export async function useSignIn(
  requestBody,
  profileValidator,
  storeAuth,
  storeMessages,
  store
) {
  try {
    const response = await storeAuth.auth(requestBody);
    if (response) {
      document.getElementById("popover-sign-in").hidePopover();
      document.getElementById("popover-sign-up").hidePopover();
      await storeAuth.getMyProfile();
      await storeMessages.getServers();
      await storeMessages.getChannels({ server_id: store.choosenServer });
    } else {
      throw {
        message: "Wrong server response status code 500",
        response: {
          status: 500,
        },
      };
    }
  } catch (error) {
    profileValidator.value.$touch();
    if ([404, 409].includes(error.response.status)) {
      profileValidator.value.login.$errors.push({
        $message: "Incorrect login or password",
      });
      profileValidator.value.password.$errors.push({
        $message: "Please try again",
      });
    }
    throw error;
  }
}

export async function useSignUp(requestBody, profileValidator, storeAuth) {
  const status = await storeAuth.createProfile(requestBody);
  if (status < 400) {
    useSignIn(
      { username: requestBody.login, userpass: requestBody.password },
      profileValidator,
      storeAuth
    );
  } else {
    throw {
      message: `Error status ${status}`,
    };
  }
}

export function useSignOut(storeAuth) {
  storeAuth.profile = undefined;
  storeAuth.authJWT = undefined;
}
