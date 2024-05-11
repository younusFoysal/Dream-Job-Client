import { useQuery } from 'react-query';

// On Site Jobs
const fetchJobsOS = async () => {
    const response = await fetch('http://localhost:5000/jobcategory/onSite');
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};

// Remote
const fetchJobsR = async () => {
    const response = await fetch('http://localhost:5000/jobcategory/remote');
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};

// Hybrid
const fetchJobsH = async () => {
    const response = await fetch('http://localhost:5000/jobcategory/hybrid');
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};




// Part Time
const fetchJobsPT = async () => {
    const response = await fetch('http://localhost:5000/jobcategory/partTime');
    if (!response.ok) {
        throw new Error('Failed to fetch Jobs');
    }
    return response.json();
};



export const useJobs = () => {
    return useQuery('jobsos', fetchJobsOS);
};

export const useJobsR = () => {
    return useQuery('jobsr', fetchJobsR);
};

export const useJobsH = () => {
    return useQuery('jobsh', fetchJobsH);
};
export const useJobsPT = () => {
    return useQuery('jobspt', fetchJobsPT);
};

export default useJobs;


