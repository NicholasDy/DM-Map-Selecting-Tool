import React from "react";

// this page is meant to act as a location for all of the saved encounters a user might have 

function Collections (){

     //call state 
    // name, email, gender, age, cell
    // const [data, setData] = useState([]);
    // const [search, setSearch] = useState("");


    // useEffect(() => {
    //     API.getRandomPeople()
    //         .then(res => {
    //             console.log(res.data.results)
    //             // have to be careful or else the instance is going to loop over itself
    //             setData(res.data.results)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])

    // name, email, gender, age, cell
    // // the column headers and the keys to the coloumn names
    // const columns = React.useMemo(
    //     () => [
    //         {
    //             id: 'name',
    //             Header: 'Name',
    //             accessor: row => `${row.name.first}${row.name.last}`, // accessor is the "key" in the data
    //             Cell: ({ row }) => (
    //                 <span>{row.original.name.first} { row.original.name.last}</span>
    //             )
    //         },
    //         {
    //             Header: 'Email',
    //             accessor: 'email', // accessor is the "key" in the data
    //         },
    //         {
    //             Header: 'Gender',
    //             accessor: 'gender', // accessor is the "key" in the data
    //         },
    //         {
    //             id: 'age',
    //             Header: 'Age',
    //             accessor: row => `${row.registered.age}`, // accessor is the "key" in the data
    //             Cell: ({ row }) => (
    //                 <span>{row.original.registered.age} </span>)
    //         },
    //         {
    //             Header: 'Cell Phone Number',
    //             accessor: 'cell', // accessor is the "key" in the data
    //         },
    //     ],
    //     []
    // )
    return(
        <div>
            {/* <Table columns={columns} data={data} results={search}/> */}
            <p>placeholder</p>
        </div>
    )
}

export default Collections