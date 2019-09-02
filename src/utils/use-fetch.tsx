import { useEffect, useState } from 'react';

export function useFetch<T>(func: () => Promise<T>) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		setIsLoading(true);
		func()
			.then(response => {
				setData(response);
				setIsLoading(false);
			})
			.catch(() => {
				setIsError(true);
				setIsLoading(false);
			});
	}, [func]);

	return { isLoading, isError, data };
}
