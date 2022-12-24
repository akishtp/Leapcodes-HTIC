const toBeChanged = document.getElementById("toBeChanged");

const readMoreSpan = document.createElement("span");
readMoreSpan.id = "ActiveReadMore";
readMoreSpan.innerText = "Read More...";

const blog_content =
    "Life insurance is one of the essentials which an individual should have for the more contented future of his family in his absence. This article section will help you recognize the actual requirement of life inserted  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus volutpat sagittis. Cras tincidunt tempor lacus, vel finibus mauris imperdiet imperdiet. Nulla ut magna lacus. Ut rhoncus orci a augue fermentum commodo. Suspendisse potenti. Nam dignissim at tortor in volutpat. Aliquam est est, aliquet non auctor in, porttitor sed mi.\
    Morbi rhoncus, neque a aliquam faucibus, justo ligula porta libero, fermentum lobortis dolor turpis non dui. Ut ut nisi eget arcu efficitur maximus. Phasellus finibus fermentum molestie. In vulputate risus sit amet mi fringilla faucibus. Quisque dapibus, sapien in consequat placerat, lacus justo gravida nulla, ut viverra nulla ligula vitae odio. Etiam ligula ante, tincidunt ut placerat id, tempus ac velit. Sed mi nunc, sollicitudin sit amet mi vitae, blandit tristique metus. Vivamus volutpat bibendum nunc, at euismod leo. Proin varius nibh finibus convallis dignissim. Nullam eget finibus dui, sed viverra mi. Donec accumsan, ligula ac mattis malesuada, elit lacus tristique purus, venenatis mollis tortor dolor nec nisi.\
    Nulla auctor at tellus et ultrices. Sed quis quam turpis. Donec sed tortor facilisis, porta ante vel, sodales velit. Donec posuere at enim et posuere. Etiam quam nibh, fermentum at metus at, ultrices hendrerit dui. Nulla bibendum, quam eget fermentum maximus, libero massa ultricies ipsum, id semper metus tortor vitae tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam id pretium tellus. Integer tellus ex, feugiat sed dapibus non, sodales fringilla elit. Ut porttitor feugiat lacus sit amet euismod. Pellentesque in sapien nec augue facilisis scelerisque a nec lacus. Etiam egestas orci hendrerit venenatis luctus. ";

if (blog_content.length < 212) {
    toBeChanged.innerText = blog_content;
    toBeChanged.appendChild(readMoreSpan);
    readMore.style.display = "none";
} else {
    toBeChanged.innerText = blog_content.substring(0, 211) + "...";
    toBeChanged.appendChild(readMoreSpan);
    const readMore = document.getElementById("ActiveReadMore");
    readMore.addEventListener("click", () => {
        toBeChanged.innerText = blog_content;
        readMore.style.display = "none";
    });
}
