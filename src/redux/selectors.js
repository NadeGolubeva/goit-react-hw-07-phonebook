import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.items;
export const selectorError = state => state.contacts.error;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorFilter = state => state.filter;

export const selectorFilterList = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
