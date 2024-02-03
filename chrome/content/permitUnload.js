var ClosingTime = {
 LoadListener: function()
 {
  window.removeEventListener('load', ClosingTime.LoadListener, false);
  window.setInterval(ClosingTime.CheckPending, 250);
 },
 CheckPending: function()
 {
  for (let i = 0; i < gBrowser.tabs.length; i++)
  {
   if (gBrowser.tabs[i].hasOwnProperty('_pendingPermitUnload') && gBrowser.tabs[i]._pendingPermitUnload === true)
   {
    if (!gBrowser.tabs[i].hasAttribute('pendingPermitUnload'))
     gBrowser.tabs[i].setAttribute('pendingPermitUnload', 'true');
   }
   else
   {
    if (gBrowser.tabs[i].hasAttribute('pendingPermitUnload'))
     gBrowser.tabs[i].removeAttribute('pendingPermitUnload');
   }
  }
 }
};
window.addEventListener('load', ClosingTime.LoadListener, false);
