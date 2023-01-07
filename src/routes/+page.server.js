export async function load({fetch}){

    const fetchUniversities = async ()=>{
        const uResponse = await fetch('http://universities.hipolabs.com/search?country=United+States');
        const uData = await uResponse.json();

        return uData
    }



    return{
        universities: fetchUniversities()
    }
}