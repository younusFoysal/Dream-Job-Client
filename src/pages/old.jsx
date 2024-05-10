import React from 'react';

const Old = () => {


    // TODO: NEW way
    // const {isPending, isError, error, data: users} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('https://localhost/user')
    //         return res.json();
    //     }
    // })
    //
    // if (isPending){
    //     return <div>Loading</div>
    // }
    // if (isError){
    //     return <p>{error.message}</p>
    // }


    // TODO: Old way
    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch('https://localhost/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    //
    // }, []);


    return (
        <div>

        </div>
    );
};

export default Old;