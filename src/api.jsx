export async function getBookCover(id = "OL229501A-S") {
    const url = `https://covers.openlibrary.org/a/olid/${id}.jpg`;
    const resp = await fetch(url);
    let img = await resp.blob();
    console.log("output:", img);
    return URL.createObjectURL(img)
  }

export async function searchBook(title){
    const url = `https://openlibrary.org/search.json?q=${title}`
    const resp = await fetch(url)
    if (!resp.ok) {
		throw new Error(`HTTP error! status: ${resp.status}`);
	}
    const data = await resp.json()
}