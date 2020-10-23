import { useState, useEffect } from 'react';

const useLoadedGame = (stuff) => {
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [loaded] )

    return [ loaded ]
}

export default useLoadedGame;