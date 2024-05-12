

export const updateJob = async (id, updatedJob) => {
    try {
        const response = await fetch(`https://dream-job-server-two.vercel.app/job/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        });

        if (!response.ok) {
            throw new Error('Failed to update Tour Spot');
        }

        const data = await response.json();
        return data; // Assuming the response contains data about the modification
    } catch (error) {
        throw new Error('Failed to update Tour Spot: ' + error.message);
    }
};
