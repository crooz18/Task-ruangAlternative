import React from 'react'
import BlogDetailsItem from './blogDetailItem'


function BlogDetails() {
    return(
        <div className='cards__blog__details'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <BlogDetailsItem
                                src="https://images.unsplash.com/photo-1616593856421-7234ffa4b65d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                                sub='
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                                
                                Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                                label='Film'
                                path='/services'
                            />
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default BlogDetails;