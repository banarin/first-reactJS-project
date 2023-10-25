import { useState } from 'react';
import { Input } from './components/forms/input';
import { Checkbox } from './components/forms/checkbox';

export function SearchBar({search,onSetSearch,showStocked,onshowStocked}) {

  return <>
    <Input placeholder="Recherche" value={search} onChange={onSetSearch} />
    <br />
    <Checkbox id="stoked" checked={showStocked} onchange={onshowStocked} label="Afficher que les produits stockés" />

  </>;
}
