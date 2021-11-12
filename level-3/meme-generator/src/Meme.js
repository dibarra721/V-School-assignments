import React from 'react'
function Meme(props) {

    return props.url ?

        //get same image as well as the form to match box_count
        //manage own version of caption state, need to target the specific image 
        <>

            <div>
                <img src={props.url} alt='oops Its Broken' />
                <button style={{ marginTop: '10px', backgroundColor: '#780000' }}>UPDATE THIS MEME</button>
                {/* filter for delete */}
                <button onClick={() => props.handleDelete(props.rId)} style={{ backgroundColor: '#FDF0D5', color: '#780000' }}>DELETE THIS MEME</button>
            </div>
        </>
        : null
}

export default Meme