import { useState, useEffect } from 'react';

const useLoadedGame = () => {
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [loaded] )

    return [ loaded ]
}

export default useLoadedGame;