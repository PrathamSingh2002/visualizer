import './App.css';
import { Link } from 'react-router-dom';
function Sidebar(prop){
    
    return(
        <div className='sidebar' id='sbar'>
            <div className='hm'>
                <Link to={"/visualizer"} className='link'>Home</Link>
            </div>
            <div className='Type'>QUADRATIC
                <div  className='cat' onClick={()=>{prop.algo(1) ;prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        BubbleSort
                    </Link>
                </div>
                <div className='cat' onClick={()=>{prop.algo(3) ;prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        SelectionSort
                    </Link>
                </div>
                <div className='cat' onClick={()=>{prop.algo(2);prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        InsertionSort
                    </Link>
                </div>
            </div>

            <div className='Type'>LOGRITHMIC

                <div className='cat' onClick={()=>{prop.algo(4);prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        QuickSort
                    </Link>
                </div>
                <div className='cat' onClick={()=>{prop.algo(5);prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        MergeSort
                    </Link>
                </div>
            </div>
            <div  className='Type'>LINEAR
                <div className='cat' onClick={()=>{prop.algo(6);prop.toggle()}}>
                    <Link to={"/visualizer/Algorithm"} className='link'>
                        Radix
                    </Link>
                </div>
            </div>
        </div>
    )
}
export  default Sidebar;