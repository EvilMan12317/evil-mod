const message = "TmlnZ2Vy"

Events.on(ClientLoadEvent, () => {
	let text = String(
		new java.lang.String(
			java.util.Base64.getDecoder().decode(message),
			"UTF-8"
		)
	)
	Core.bundle.debug(text);
	Vars.content.each(c => {
		if (!(c instanceof UnlockableContent)) return;
		c.localizedName = text;
		c.description = text;
		c.details = text;
	});
});
