export function faqRepeater_itemReady($item, itemData, index) {
  $item("#questionBox").onClick(() => {
    const isCollapsed = $item("#answerBox").collapsed;

    if (isCollapsed) {
      $item("#answerBox").expand();
    } else {
      $item("#answerBox").collapse();
    }
  });
}
