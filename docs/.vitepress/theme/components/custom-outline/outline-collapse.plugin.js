let isSetCss = false

function setOutline() {
    if (!document) return;
    const aside = document.querySelector('.VPDocAsideOutline');
    if (aside) {
        // 找到所有的outline-link
        const outlineLinks = aside.querySelectorAll('.outline-link');
        // console.log(outlineLinks,'获取到的元素')
        //给outlineLinks前面添加一个向下的小三角
        for (let i = 0; i < outlineLinks.length; i++) {
            // 设置父元素相对定位
            outlineLinks[i].parentNode.style.position = 'relative';
            // 设置元素向右移动20px
            outlineLinks[i].style.marginLeft = '20px';

            const arrow = document.createElement('span');
            arrow.classList.add('arrow');
            arrow.textContent = '▼';
            // 设置元素绝对定位
            arrow.style.position = 'absolute';
            arrow.style.marginTop = '2px';
            // 设置元素鼠标小手指
            arrow.style.cursor = 'pointer';
            // 将小三角设置为向右的小三角
            arrow.textContent = '▼';
            arrow.style.transition = 'transform 0.5s';

            // 获取同级的VPDocOutlineItem元素
            const outlineItems = outlineLinks[i].parentNode.querySelectorAll(':scope > .VPDocOutlineItem');

            if (outlineLinks[i].parentNode.querySelectorAll('.arrow').length) continue
            // 添加点击事件 获取同级的VPDocOutlineItem元素
            arrow.addEventListener('click', () => {
                if (outlineItems) {
                    // 获取该元素的display
                    const display = outlineItems[0].style.display;
                    // 如果display为none
                    if (display === 'none') {
                        // 将display设置为block
                        outlineItems[0].style.display = 'block';
                        // 将小三角设置为向右的小三角
                        // arrow.textContent = '▼'
                        arrow.style.transform = 'rotate(0deg)';

                    } else {
                        // 将display设置为none
                        outlineItems[0].style.display = 'none';
                        // 将小三角设置为向下的小三角

                        // arrow.textContent = '►';
                        arrow.style.transform = 'rotate(-90deg)';
                    }
                }
            })
            if (outlineItems.length) {

                outlineLinks[i].parentNode.insertBefore(arrow, outlineLinks[i]);
                arrow.click()
            }
        }
    } else {
        console.log('未找到大纲容器'); // 如果未找到大纲容器
    }
}

function setActive(active) {
    if (!document) return;
    const outlineLinks = document.querySelectorAll('.outline-link');
    for (let i = 0; i < outlineLinks.length; i++) {
        // 获取同级的VPDocOutlineItem元素
        const outlineItems = outlineLinks[i].parentNode.querySelectorAll(':scope > .VPDocOutlineItem');
        const arrow = outlineLinks[i].parentNode.querySelectorAll(':scope > .arrow');

        if (!outlineItems.length) {
            // 跳出本次循环
            continue
        }
        // 判断其父元素下是否有子元素同时有active类且outline-link类
        if (outlineLinks[i].parentNode.querySelector('.outline-link.active')) {
            // 将display设置为block
            outlineItems[0].style.display = 'block';
            // 将小三角设置为向右的小三角
            // arrow.textContent = '▼'
            arrow[0].style.transform = 'rotate(0deg)';
        } else {
            // 将display设置为block
            outlineItems[0].style.display = 'none';
            // 将小三角设置为向右的小三角
            // arrow.textContent = '▼'
            arrow[0].style.transform = 'rotate(-90deg)';
        }
    }
}

// 设置active样式
function setActiveCss() {
    if (isSetCss) return
// 创建 style 元素
    const styleElement = document.createElement('style');
// 设置样式内容
    styleElement.innerHTML = `
    .active.outline-link{
        font-weight: bold !important;
        font-size: 20px !important;
    }
`;
// 将 style 元素插入到文档头部
    document.head.appendChild(styleElement);
    isSetCss = true
}

const OutlineCollapsePlugin = () => {
    setOutline();
    setActiveCss();
    setActive()
    window.removeEventListener("scroll", setActive)
    window.addEventListener("scroll", setActive)
};

export default OutlineCollapsePlugin;