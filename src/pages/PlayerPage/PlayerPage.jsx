import React, { Component } from 'react'

import {makeStyles} from "@material-ui/styles";
import ReactPlayer from 'react-player'


const useStyles = makeStyles(theme=>({
    mediaPlayer:{
        position:'relative'
    },
    mediaController:{
        position:'absolute',
    }
}))

const  PlayerPage = props=> {

        return (
           <div>
               {/*<Media>*/}
               {/*    <div className="media">*/}
               {/*        <div className="media-player">*/}
               {/*            <Player width={500} height={500} src="https://vimeo.com/180293809" />*/}
               {/*        </div>*/}
               {/*        <div className="media-controls">*/}
               {/*            <PlayPause />*/}
               {/*            <MuteUnmute />*/}
               {/*        </div>*/}
               {/*    </div>*/}
               {/*</Media>*/}

               <ReactPlayer width={480} height={240} url={'https://vimeo.com/180293809'}
                            controls={true}
                            />
           </div>
        )

}

export default PlayerPage;


