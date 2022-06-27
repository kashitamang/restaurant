import { client } from './client';

//gets data from supabase 
export async function getMissedConnections() {
  const { data } = await client
    .from('missed_connections')
    .select('*');

  return data;

}

//signs user up 
export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({ 
    email: email, 
    password: password,
  });
  if (error) {
    // console.error(error);
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
  return error;
}


//create connection 
export async function createConnection(missedConnection) {
  const { data } = await client
    .from('missed_connections')
    .insert(missedConnection)
    .single();

  return data;
}

//updates connection
export async function updateMissedConnection(missedConnection, id) {
  const { data } = await client 
    .from('missed_connections')
    .update(missedConnection)
    .match({ id: id })
    .single();

  return data;
}

//delete connection 
export async function deleteMissedConnection(id) {
  const { data } = await client 
    .from('missed_connections')
    .delete()
    .match({ id: id })
    .single();

  return data;
}

//gets connection by id from supabase 
export async function getMissedConnectionById(id) {
  const { data } = await client
    .from('missed_connections')
    .select('*')
    .match({ id: id })
    .single();

  return data;
}


