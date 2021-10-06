// Query from Mock Server

// Query content from mock server with js fetch
// Display queried data
// Handle loading state
// Handle failed case
console.log("OK")
async function getAllManga(){
    let response = await fetch("https://1bf488e4-501e-4884-ba5e-939b9fadc501.mock.pstmn.io/manga/getAll",{
        method: "GET",
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
    });
    console.log(response.body.getReader());
}
getAllManga();