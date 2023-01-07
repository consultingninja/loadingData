/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        name: `Rasberry Pi`,
        description: `Single Board Computer`,
        price: 110
    };
  }



/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  const fetchUniversities = ()=>{
    const uResponse = await fetch('http://universities.hipolabs.com/search?country=United+States');
    const uData = await uResponse.json();
    const universities = uData;
    return uData
  }
  return{
    universities: fetchUniversities()
  }
 }


/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
  const fetchUser = ()=>{
    const uResponse = await fetch('https://randomuser.me/api/');
    const uData = await uResponse.json();
    const user = uData
    return uData
  }

  return{
    users:fetchUser()
  }

  }

    <h4>{JSON.stringify(data.user)}</h4>
