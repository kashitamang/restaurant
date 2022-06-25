import { client } from './client';

//gets data from supabase 
export async function getMissedConnections() {

}

//gets user
export async function getUser() {

}

//checks authorization of user 
export async function checkAuth() {

}

//redirects if logged in 
export async function redirectIfLoggedIn() {

}

//signs user up 
export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({ 
    email: email, 
    password: password,
  });
  if (error) {
    console.error(error);
    throw error;
  } else {
    return user;
  }
}

//signs user in 
export async function signIn(email, password) {
  const { user } = await client.auth.signIn({ 
    email: email, 
    password: password, 
  });

  return user;
}

//logs user out 
export async function logout() {
  const { error } = await client.auth.signOut();
}


//create connection 
export async function CreateMissedConnection() {

}

//updates connection
export async function updateMissedConnection() {

}

//delete connection 
export async function deleteMissedConnection() {

}

//gets connection by id from supabase 
export async function getMissedConnectionById() {

}


