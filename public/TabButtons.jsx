import './TabButtons.css';
// export default function TabButtons({children,onSelect,isSelected}){
export default function TabButtons({children,isSelected,...props}){
    // function handleClick(){
    //     console.log('ddd');
    // }
    return (
    <li className="tab-list">
        <button className={`tab-button ${isSelected? 'active':''}`} {...props}>{children}</button>
        {/* <button class="tab-button" onClick={handleClick}>{children}</button> */}
    </li>)
}