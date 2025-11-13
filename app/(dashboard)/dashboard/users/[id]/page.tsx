
const UserDetails = async ( { params } : { params: Promise <{id:String}> }) => {      // these are called page params
    const{ id } = await params;
    return (
        <div>
            <h1>Showing details for user no #{id}</h1>
        </div>
    )
}

export default UserDetails
