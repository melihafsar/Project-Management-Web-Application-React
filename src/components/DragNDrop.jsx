import React, {useState, useRef} from 'react'

function DragNDrop({data}) {
    const [list,setList] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    function handleDragStart (e, params) {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(()=>{
            setDragging(true);
        },0)

    };

    function handleDragEnd() {
        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;

    }

    function handleDragEnter(e, params) {
        const currentItem = dragItem.current;
        if(e.target !== dragNode.current){
            setList(oldList =>{
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.groupIndex].items.splice(params.itemIndex, 0, newList[currentItem.groupIndex].items.splice(currentItem.itemIndex,1)[0]);
                dragItem.current = params;
                return newList
            })
        }
    }

    function getStyles(params) {
        const currentItem = dragItem.current;
        if(currentItem.groupIndex === params.groupIndex && currentItem.itemIndex === params.itemIndex){
            return "current dnd-item";
        }
        return "dnd-item";
    } 

    return (
        <div className="drag-n-drop">
            {
                list.map((group, groupIndex) => (
                    <div key={groupIndex} className="dnd-group"
                        onDragEnter={dragging && !groupIndex.length? (e) => handleDragEnter(e, {groupIndex, itemIndex: 0}) : null}
                    >
                        <div className="group-title">
                            {group.title}
                        </div>
                        {
                            group.items.map((item, itemIndex) => (
                                <div 
                                    key={itemIndex} 
                                    draggable
                                    onDragStart={(e) => {handleDragStart(e, {groupIndex, itemIndex})}} onDragOver ={dragging? (e) => handleDragEnter(e, {groupIndex,itemIndex}) : null}
                                    className={dragging? getStyles({groupIndex, itemIndex})  : "dnd-item"}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default DragNDrop
