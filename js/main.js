// File: functions/submit.js

export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const data = Object.fromEntries(formData);

    // Here is where you would integrate an email service API
    // For now, we will log it to the console for demonstration
    console.log("Form data submitted:");
    console.log(data);

    // In a real scenario, you'd have something like:
    // await sendEmail({
    //   to: "sales@hongxin-elec.com",
    //   from: "website-form@yourdomain.com",
    //   subject: `New Message from ${data.name}: ${data.subject}`,
    //   body: data.message
    // });

    // Redirect to a "thank you" page on success
    const url = new URL(context.request.url);
    return Response.redirect(`${url.origin}/thank-you.html`, 302);

  } catch (error) {
    console.error(error);
    return new Response('Error submitting form.', { status: 500 });
  }
}