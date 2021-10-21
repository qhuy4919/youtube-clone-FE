export const get_param = {
  video_param_id: (location: any, name: any) => {
    if (!location || !location.search) {
      return null;
    }
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(name);
  },
};
