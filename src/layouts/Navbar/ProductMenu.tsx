import React from 'react'
import { Menu, MenuItem, ListItemText, ListItemIcon } from '@material-ui/core'

export type ProductMenuProps = {
  anchor: Element | null
  handleClose: () => void
  items: ProductMenuItem[]
}
export type ProductMenuItem = {
  label: string
  icon: any
  id: string
}
const ProductMenu: React.FC<ProductMenuProps> = ({ anchor, handleClose, items }) => {
  return (
    <Menu
      id='product-menu'
      anchorEl={anchor}
      open={Boolean(anchor)}
      onClose={handleClose}
      keepMounted

      elevation={2}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {items.map(({ label, icon: Icon, id }) => (
        <MenuItem
          key={label} style={{ minWidth: 170 }}
          component='a' href={`#${id}`}
          onClick={handleClose}
        >
          <ListItemIcon>
            <Icon fontSize='small' />
          </ListItemIcon>
          <ListItemText primary={label} />
        </MenuItem>
      ))}
    </Menu>
  )
}
export default ProductMenu