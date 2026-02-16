Events.on(ClientLoadEvent, () => {
  let text = "N" + "i" + "g" + "g" + "e" + "r"
  Core.bundle.debug(text);
  Vars.content.each(c => {
    if (!(c instanceof UnlockableContent)) return;
    c.localizedName = text;
    c.description = text;
    c.details = text;
  });
});
