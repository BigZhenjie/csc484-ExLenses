"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Disclaimer = () => {
    const [agreed, setAgreed] = useState(false)
    const router = useRouter();
  return (
    <div className='h-full flex flex-col items-center justify-evenly'>
        <div className='h-[80%] p-5 overflow-auto whitespace-normal max-w-[400px]'>
            User Agreement
            Effective Date: {new Date().toLocaleDateString()}&nbsp;
            This User Agreement ("Agreement") is a legal contract between you  and ExLenses. By using our expense tracker app, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
            Acceptance of Terms By accessing and using the App, you accept and agree to be bound by this Agreement and our Privacy Policy. If you do not agree to these terms, please do not use the App.
            Service Description The App provides a platform for users to track their bank expenses by connecting their bank accounts to the App. Users can view their expenses in one place. Currently, there is no support for manual expense entries.
            User Information and Privacy
            Data Security: We are committed to protecting your personal information. All data transmitted between your bank and the App is encrypted using industry-standard security protocols.
            Data Usage: We do not mine, sell, or use your data for purposes other than providing the services offered by the App.
            Data Access: Your information is accessible only to you. No one, including our employees, has the right to view your information unless in absolute emergencies, such as compliance with legal obligations or protecting the rights and safety of users or the public.
            User Obligations
            Account Security: You are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account.
            Accuracy of Information: You agree to provide accurate, current, and complete information when connecting your bank account to the App.
            Limitation of Liability
            The Company is not liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the App.
            The Company does not guarantee the accuracy, completeness, or timeliness of the information displayed within the App.
            Modification of Terms We reserve the right to modify this Agreement at any time. We will notify you of any changes by posting the new terms on our website and/or through the App. Your continued use of the App after such modifications constitutes your acceptance of the new terms.
            Termination We reserve the right to suspend or terminate your access to the App at our discretion, without notice, for conduct that we believe violates this Agreement or is harmful to other users of the App, us, or third parties, or for any other reason.
            Governing Law This Agreement shall be governed by and construed in accordance with the laws of USA, without regard to its conflict of law principles.
            Contact Information If you have any questions about this Agreement, please contact us at https://exlenses.com.
            By using the App, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
            ExLenses
        </div>
        <div className='flex items-center'>
            <input type='checkbox' checked={agreed} onChange={() => setAgreed(!agreed)} />
            <label>I agree to the terms and conditions</label>
        </div>
        <Button disabled={!agreed} className='bg-brightBlue' onClick={() => router.push("/")}>Continue</Button>
    </div>
  )
}

export default Disclaimer