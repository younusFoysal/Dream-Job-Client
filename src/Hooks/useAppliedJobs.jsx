
import { useQuery } from 'react-query';


const fetchJobs = async () => {
    const response = await fetch('https://dream-job-server-two.vercel.app/job');
    if (!response.ok) {
        throw new Error('Failed to fetch jobs data');
    }
    return response.json();
};

const fetchAppliedJobs = async () => {
    const response = await fetch('https://dream-job-server-two.vercel.app/ajobs');
    if (!response.ok) {
        throw new Error('Failed to fetch applied jobs data');
    }
    return response.json();
};

export const useJobs = () => {
    return useQuery('jobs', fetchJobs);
};

export const useAppliedJobs = () => {
    return useQuery('appliedJobs', fetchAppliedJobs);
};
