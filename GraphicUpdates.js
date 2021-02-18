function colorUpdate(item){
        var Item; //variable that holds the id
        switch(item){
            case 1:
                Item = "level_01_box";
                break;
            case 2:
                Item = "level_02_box";
                break;
            case 3:
                Item = "level_03_box";
                break;
            case 4:
                Item = "level_04_box";
                break;        
        }
        document.getElementById("level_01_box").style.backgroundColor = "azure";
        document.getElementById("level_02_box").style.backgroundColor = "azure";
        document.getElementById("level_03_box").style.backgroundColor = "azure";
        document.getElementById("level_04_box").style.backgroundColor = "azure";
        document.getElementById(Item).style.backgroundColor = "lightblue";
    }
    function setSiteDetails(level){
        var elements = [];
        switch(level){
            case 1:
                elements = level1List;
                break;
            case 2:
                elements = level2List;
                break;
            case 3:
                elements = level3List;
                break;
            case 4:
                elements = level4List;
                break;
                
        }
        return function(){
        var output = [];
        output.push(`<div id="siteDetails" class = "flex-container">`);
        elements.forEach(
            item=>{
            output.push(`${item}`);
        });
        output.push(`</div>`);
        document.getElementById("right_corner_bottom_bar_parent").innerHTML = output.join('');
        colorUpdate(level);
    }
    }