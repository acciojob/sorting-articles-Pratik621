//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let newArr=[];
for(let i=0;i<bands.length;i++){
	let splitted=bands[i].split(" ")
	let j=0;
	if(splitted[j]==="The" || splitted[j]==="An" || splitted[j]==="A"){
	    j++;
	    if(splitted[j]!=="The" || splitted[j]!=="An" || splitted[j]!=="A"){
	        newArr.push(splitted[j])
	    }
	    
	}
	else{
	    newArr.push(splitted[j])
	}
	
}
let ans=[]
newArr.sort();

 for(let k=0;k<newArr.length;k++){
for(let i=0;i<bands.length;i++){
   let splitted= bands[i].split(" ")
             for(let j=0;j<splitted.length;j++){
            if(splitted[j]===newArr[k]){
                ans.push(splitted.join(" "))
            }
        }
    }
}
const text=document.querySelector(".text")

for(let i=0;i<ans.length;i++){
	const p=document.createElement("li")
	p.textContent=ans[i]
	text.appendChild(p)
	
	
}











