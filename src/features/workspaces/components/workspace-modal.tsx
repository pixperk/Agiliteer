"use client"
import { Modal } from "@/components/modal"
import { WorkspaceForm } from "./workspace-form"
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal"

export const WorkspaceModal = () => {
    const {isOpen, setIsOpen, close} = useCreateWorkspaceModal()
    return (
        <Modal open={isOpen } onOpenChange={setIsOpen}>
            <WorkspaceForm onCancel={close}/>
        </Modal>
    )
}