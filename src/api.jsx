export async function getBookCover(olid){
    url=`https://covers.openlibrary.org/a/olid/${olid}`
    const resp = await fetch(url)
    if (!resp.ok) {
		throw new Error(`HTTP error! status: ${resp.status}`);
	}
    const data = await resp.json()
}

export async function searchBook(title){
    url = `https://openlibrary.org/search.json?q=${title}`
    const resp = await fetch(url)
    if (!resp.ok) {
		throw new Error(`HTTP error! status: ${resp.status}`);
	}
    const data = await resp.json()
}