function NoItems({text}) {
    return ( 
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{paddingLeft: "55px"}}><img src="./images/list-images/empty-list.png" alt="no items :("></img></div>
            <div>{text}</div>
        </div>
     );
}

export default NoItems;
