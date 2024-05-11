

export const deleteJob = async (jobId) => {
    try {
        const response = await fetch(`http://localhost:5000/job/${jobId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete tour spot');
        }

        const data = await response.json();
        return data; // Assuming the response contains data about the deletion status
    } catch (error) {
        throw new Error('Failed to delete tour spot: ' + error.message);
    }
};

export default deleteJob;
