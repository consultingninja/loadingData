export async function load({fetch}){
    const uResponse = await fetch('https://randomuser.me/api/');
    const uData = await uResponse.json();
    const user = uData ;


    return{
        user: user
    }
}