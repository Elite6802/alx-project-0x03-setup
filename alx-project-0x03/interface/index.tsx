import { ReactNode } from "react";

/**
 * Defines the props for the common Button component.
 */
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

/**
 * Defines the props structure for the main Layout component.
 */
export interface LayoutProps {
  children: ReactNode;
}

/**
 * Defines the props for the imperative routing function in the Home page.
 */
export interface PageRouteProps {
  pageRoute: string
}
