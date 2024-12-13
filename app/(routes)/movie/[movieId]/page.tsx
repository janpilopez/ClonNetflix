import { Button } from '@/components/ui/button';
import React from 'react';

//independiente del parametro que pongamos en el url lo detectara como movieId
export default function MovieIdPage( {params}: {
    //debe coincidir el directo con el nombre del params definido a continuacion
    params : {movieId: string};
} ){
    
    return (
        <Button>
                {params.movieId}
        </Button>
    )
}

