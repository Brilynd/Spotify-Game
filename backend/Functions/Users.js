async function CreateUser (client,userInfo){
    try{
        console.log(userInfo)
        await client.connect();
        await client.db('Spotify-Higher-Lower').collection('UserInfo').insertOne({Username:userInfo.Username,UserID:userInfo.UserID,Score:[]})

    }
    catch(e){
        console.error(e)
    }
}
//Takes in ArtistName,ArtistID,Score,UserID

async function AddUserScore(client,userInfo){
    try{
    await client.connect()
    await client.db('Spotify-Higher-Lower').collection('UserInfo').updateOne({UserID:userInfo.UserID},{$push:{Score:{Artist:userInfo.ArtistName,ArtistID:userInfo.ArtistID,Score:userInfo.Score}}})
    }
    catch(e){
        console.error(e)
    }
}
async function GetUserScoreboard(client,userInfo){
    try{
        await client.connect()
        const response = await client.db('Spotify-Higher-Lower').collection('UserInfo').findOne({UserID:userInfo.UserID})
        console.log(response)
        return response

    }
    catch(e){
        console.error(e)
    }
}
module.exports = {CreateUser,AddUserScore,GetUserScoreboard}