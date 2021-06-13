const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const category = document.getElementById('category');

const searchConcept = async searchText => {
  const res = await fetch('../data/images.json');
  const concepts = await res.json();


let matches = concepts.filter(concept => {
  const regex = new RegExp(`^${searchText}`, 'gi');
  return concept.title.title.match(regex);
});
//&& concept.status.current.match("PUBLISHED")

if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
}
  console.log(matches);
  outputHtml(matches);

};
// <span class="text-primary mb-2">${match.previewUrl}</span>
// show result in HTML on page
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <div class="card card-body mb-1">
      <h4>${match.title.title}</h4>
     <a href="${match.previewUrl}">${match.previewUrl}</a>
      <small>${match.altText.alttext}</small>
      <small>${match.license}</small>

    </div>
    `).join('');
    //<img style="height:300px;" src="${match.metaImage.url}" alt="${match.metaImage.alt}">
    matchList.innerHTML = html;
  };
};



search.addEventListener('input', () => searchConcept(search.value));


// get matching data
