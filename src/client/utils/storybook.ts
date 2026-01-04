export function Storybook(
	name: string,
	caller: LuaSourceContainer,
	storyRoots?: Array<Instance>,
	groupRoots = true,
): { groupRoots: boolean; name: string; storyRoots: Array<Instance> | undefined } {
	return {
		name,
		groupRoots,
		storyRoots: storyRoots ?? caller.Parent?.GetChildren() ?? [],
	};
}
