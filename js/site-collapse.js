'use strict';

// On script load, Highlight the default activate panel
if( $('.halton-collapse').length) {
    activateSelectedPanel($('.halton-collapse'));
}

// After the newly activated panel has finished collapsing:
// - Remove the highlight on the former active panel
// - Highlight new active panel
$('.halton-collapse').on('shown.bs.collapse', function () {
    
    activateSelectedPanel($(this));
});

// ...
// ...
$('.halton-collapse').on('hidden.bs.collapse', function () {
    deactivateOtherPanel();
});



/**
 * Closed all active panels and remove the highlight
 */
function deactivateOtherPanel() {
    var classActivePanel = 'halton-panel-active';
    var $activePanel = $('.' +classActivePanel);

    // Collapse panel ...
    $activePanel.find('.collapse.in').removeClass('in');

    // Remove highlight ...
    $activePanel.removeClass((classActivePanel));
}


/**
 * Highlight the active panel's (heading and body background)
 * @param {*} $elt 
 */
function activateSelectedPanel($elt) {
    var classActivePanel = 'halton-panel-active';

    // Activate the new active panel ...
    var $activePanel = $elt.find('.panel-collapse.collapse.in');
    var $activePanelHeading = $activePanel.prev('.panel-heading');
    $activePanelHeading.parent('.panel').addClass(classActivePanel);
}