import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { Easing, KeyboardAvoidingViewProps, StyleProp } from 'react-native'
import styled from 'styled-components/native'

const ModalView = styled.View`
  flex: 1;
`

const ModalScrollView = styled.ScrollView`
  flex: 1;
`

export const modalWrapperType = {
  view: ModalView,
  scrollView: ModalScrollView,
}

export type BaseModalProps = {
  isVisible?: boolean
  children?: any
  backdropStyle?: StyleProp<any>
  speed?: number
  easing?: Easing
  closeOnClickOutside?: boolean
  isScrollView?: boolean
  isCloseButton?: boolean
  useKeyboardAvoidingView?: boolean
  keyBoardAvoidingViewProps?: KeyboardAvoidingViewProps
  wrapperProps?: any
  wrapperType?: 'view' | 'scrollView'
  onDismiss?: () => void
}

export interface BaseModalRef {
  show: () => void
  hide: () => void
}

const RootModal = (
  {
    isVisible = false,
    children,
    isScrollView = true,
    isCloseButton = true,
    keyBoardAvoidingViewProps = {},
    useKeyboardAvoidingView = false,
    wrapperProps = {},
    wrapperType = 'view',
    ...rest
  }: BaseModalProps,
  ref: Ref<BaseModalRef>,
) => {
  const [visible, setIsVisible] = useState(isVisible)

  const show = () => {
    setIsVisible(true)
  }

  const hide = () => {
    setIsVisible(false)
  }

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }))

  useEffect(() => {
    if (isVisible) {
      show()
    }
  }, [isVisible])

  const ModalContainer = useKeyboardAvoidingView
    ? styled.KeyboardAvoidingView
    : React.Fragment

  const modalContainerProps = useKeyboardAvoidingView
    ? ({
        style: { flex: 1 },
        ...keyBoardAvoidingViewProps,
      } as KeyboardAvoidingViewProps)
    : {}

  const ModalWrapper = modalWrapperType[wrapperType]

  return (
    <Root
      animationType="slide"
      transparent={true}
      visible={visible}
      hardwareAccelerated={true}
      {...rest}
    >
      {/* @ts-ignore TODO: Conflict in type of styled and native component */}
      <ModalContainer {...modalContainerProps}>
        {/* @ts-ignore TODO: Conflict in type of styled and native component */}
        <ModalWrapper {...wrapperProps} wrapperType={wrapperType}>
          {!!isCloseButton && (
            <ModalClose onPress={hide}>
              <CancelText>Cancel</CancelText>
            </ModalClose>
          )}
          {children}
        </ModalWrapper>
      </ModalContainer>
    </Root>
  )
}

/**
 * `BaseModal` is came from the react-native modal. see https://reactnative.dev/docs/modal
 * to use this, wrap any content with this component and access the hide/show function via ref.current.
 * The extended props of the modal are below:
 *
 * @property `isVisible?` Sets the default value of the modal. You can show the modal onload in case.
 * @property `wrapperType?` Component type of the modal content wrapper. Options are 'view' | 'scrollView'. Defaults to 'view'
 * @property `wrapperProps` The props to be applied in the modal content wrapper.
 * @property `isCloseButton` A flag wether to show the close button on the top right section.
 */
export const BaseModal = forwardRef(RootModal)

const Root = styled.Modal`
  background-color: red;
  height: 100%;
  flex: 1;
`

const ModalClose = styled.TouchableOpacity`
  position: absolute;
  right: 24;
`

const CancelText = styled.Text`
  color: black;
`

export default BaseModal
