import React from 'react';
import './cards.css';
import CardItem from './cardItem';

function Cards() {
    return (
    <div className='cards'>
        <h1>All Articles!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="https://images.unsplash.com/photo-1616593856421-7234ffa4b65d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80"
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            sub='
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                            
                            Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                            label='Film'
                            path='/services'
                        />
                        <CardItem
                            src="https://images.unsplash.com/photo-1576237934915-c716cf54b24d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            sub='
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                            
                            Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                            label='Food'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="https://images.unsplash.com/photo-1616628950295-d3288bd7a96d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            sub='
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                            
                            Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src="https://images.unsplash.com/photo-1616600974087-46326d71dce2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            sub='
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                            
                            Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                            label='Adrenaline'
                            path='/services'
                        />
                        <CardItem
                            src="https://images.unsplash.com/photo-1616337793116-5eb0d33c910d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            sub='
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat eu tellus tristique placerat. Morbi nec augue sem. Nullam at nibh interdum, suscipit lorem a, pretium odio. Mauris lectus erat, bibendum ac vehicula id, maximus non justo. Fusce lacinia tellus at orci tristique, eu interdum mauris pharetra. Fusce ullamcorper finibus euismod. Phasellus porta efficitur consectetur. Nulla consectetur fermentum libero, luctus suscipit velit viverra eu. Integer laoreet tortor vitae tristique ullamcorper. Nulla varius nunc quam. Nulla porttitor sodales mattis.
                            
                            Aenean ac dolor convallis, rhoncus orci et, facilisis tortor. Vestibulum venenatis urna at ante congue convallis. Donec eget est nec ligula venenatis ultricies. Suspendisse vitae sodales tortor. Proin vel urna condimentum, faucibus est at, commodo ipsum. In ultrices, mauris imperdiet maximus ultricies, felis ligula faucibus orci, at venenatis nunc libero non augue. Nam nisi enim, placerat et bibendum quis, sagittis a diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. In quis nunc venenatis, placerat augue vitae, euismod orci. Fusce leo ipsum, mollis elementum commodo et, auctor sed sapien. Nulla non cursus diam. Donec consequat metus ac porttitor scelerisque. Fusce suscipit neque at pellentesque commodo. Integer vehicula augue in nulla commodo, et convallis lacus suscipit. Praesent tincidunt lectus metus, non pellentesque erat varius vel. Donec gravida facilisis nibh, ac rutrum nisi.'
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;