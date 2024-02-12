export const isMobile = (display:any) =>
  computed(() => {
    const breakpoint = display.name.value
    return breakpoint === 'xs'
  })

export const isSm = (display:any) =>
  computed(() => {
    const breakpoint = display.name.value
    return breakpoint === 'sm'
  })

export const useWindowWidth = (display:any) =>
  computed(() => {
    return display.width.value
  })
