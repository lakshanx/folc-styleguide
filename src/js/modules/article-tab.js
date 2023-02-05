$(document).ready(function () {
	const $articleTab = $('.article-tab');
	$articleTab.find('.nav-item a').click(function () {
		const activeTab = $(this).text();
		$articleTab.find('span').text(activeTab);
	});
});
