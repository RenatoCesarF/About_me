import React from 'react'
import { SiTwitch } from 'react-icons/si'
import { FaYoutube, FaGithubSquare } from 'react-icons/fa'

const LinkName = {
    YOUTUBE: "Youtube",
    TWITCH: "Twitch",
    GITHUB: "GitHub",
    DEFAULT: "",
}

function getLinkNameByURL(url) {
    if (url == null) return LinkName.DEFAULT
    if (url.includes("youtube") || url.includes("youtu.b")) {
        return LinkName.YOUTUBE;
    }
    if (url.includes("twitch")) {
        return LinkName.TWITCH;
    }

    if (url.includes("github")) {
        return LinkName.GITHUB;
    }
    return LinkName.DEFAULT
}

function Post(props) {
    const linkName = getLinkNameByURL(props.link);

    return (
        <div>
            <h1 className='titulo_post'>{props.tittle}</h1>
            <div>
                <p className='texto_do_post'>{props.body}</p>
            </div>

            <div>

                <p className="post_link" onClick={() => window.open(props.link)}>

                    {
                        linkName === LinkName.TWITCH ?
                            (<SiTwitch size={30} color="#613FA0" />)
                            :
                            linkName === LinkName.YOUTUBE ?
                                (<FaYoutube size={30} color='#F20F22' />)
                                :
                                linkName === LinkName.GITHUB ?
                                    (<FaGithubSquare size={40} color='#2d2d2d' />)
                                    :
                                    null
                    }

                </p>

            </div>
            <footer className="post_date">{props.date} </footer>
            <hr className='linha' />
        </div>
    )
}

export default Post;