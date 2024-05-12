import { useMutation } from 'react-query';

export const useAddUserToDB = () => {
    return useMutation((user) =>
        fetch('https://dream-job-server-two.vercel.app/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
    );
};

export default useAddUserToDB;

